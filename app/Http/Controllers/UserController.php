<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Admin;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Validator;


class UserController extends Controller
{
    public function __construct() {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    public function register(Request $req) {
        $validator = Validator::make($req->all(), [
            'firstName' => ['required', 'string', 'between:2,100'],
            'lastName' => ['required', 'string', 'between:2,100'],
            'email' => ['required', 'string', 'email', 'max:100', 'unique:users'],
            'password' => ['required', 'string', 'min:6'],
            'ocupation' => ['required', 'string', 'between:2,100'],
            'city' => ['required', 'string', 'between:2,100'],
            'zipCode' => ['required', 'integer'],

        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }

        $user = User::create(array_merge(
                    $validator->validated(),
                    ['password' => bcrypt($req->password)]
                ));

        return response()->json([
            'message' => 'User successfully registered',
            'user' => $user
        ], 201);
    }

    public function login(Request $req){
    	$validator = Validator::make($req->all(), [
            'email' => ['required', 'email'],
            'password' => ['required', 'string', 'min:6'],
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        if (! $token = auth()->attempt($validator->validated())) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->createNewToken($token);
    }
/*
    function register(Request $req)
    {
        $user= new User;
        $user->name=$req->input('firstName');
        $user->surname=$req->input('lastName');
        $user->email=$req->input('email');
        $user->password= Hash::make($req->input('password'));
        $user->ocupation=$req->input('ocupation');
        $user->city=$req->input('city');
        $user->zipCode=$req->input('zipCode');
        if (User::where('email', $req->email)->exists()) {
            return ["error"=>"Email already in use"];
        }else{
            $user->save();
            return response()->json(['status' => 'ok', 'message' => 'Sign Up Successfull']);
        }
        
    }

*/
/*
    function login(Request $req)
    {
        $user= User::where('email', $req->email)->first();
        if(!$user || !Hash::check($req->password, $user->password))
        {
            return ["error"=>"Email or password do not match"];
        }
        $getId = User::where('email', $user->email)->value('ID');
        $isAdmin=Admin::where('u_id', $getId)->first();
        if($isAdmin)
        {
            //return response()->json(['admin' => true, 'user' => $user]);
            return response()->json(['admin' => true, 'ID' => $user->ID, 'email' => $user->email, 'name' => $user->name, 'surname' => $user->surname, 'ocupation' => $user->ocupation, 'city' => $user->city, 'zipCode' => $user->zipCode]);
        }
        else{
            //return response()->json(['admin' => false, 'user' => $user]);
            return response()->json(['admin' => false, 'ID' => $user->ID, 'email' => $user->email, 'name' => $user->name, 'surname' => $user->surname, 'ocupation' => $user->ocupation, 'city' => $user->city, 'zipCode' => $user->zipCode]);
        }
    }
    */
    /*
    function validateUser(Request $req)
    {

    }
    function updateOcupation(Request $req)
    {

    }
    */
    public function userProfile()
    {
        return response()->json([
            "status" => 'ok',
            "user" => auth()->user(),
            
    ]);
    }


    public function logout()
    {
        auth()->logout();
        return response()->json(['message' => 'Successfully logged out']);
    }

    public function refresh()
    {
        return $this->createNewToken(auth()->refresh());
    }


    protected function createNewToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => auth()->user()
        ]);
    }
    
}
