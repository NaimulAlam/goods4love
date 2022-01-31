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

    public function userProfile()
    {
        return response()->json([
            "status" => 'ok',
            "user" => auth()->user(),
            
    ]);
    }

    public function updateProfile(Request $req)
    {
        $validator = Validator::make($req->all(),[
            'ocupation' => ['required', 'string', 'between:2,100'],
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }


        if($validator->validated()){
            $user = auth()->user();
            $user->ocupation = $req->input('ocupation');
            $user->save();

            return response()->json([
                "status" => 'ok',
                "message" => 'User successfully updated'
            ]);
        }

        
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
