<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Admin;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;



class UserController extends Controller
{
    function register(Request $req)
    {
        $user= new User;
        $user->name=$req->input('name');
        $user->surname=$req->input('surname');
        $user->email=$req->input('email');
        $user->password= Hash::make($req->input('password'));
        $user->phone=$req->input('phone');
        if (User::where('email', $req->email)->exists() || User::where('phone', $req->phone)->exists()) {
            return ["error"=>"Email or phone number already in use"];
        }else{
            $user->save();
            return $user;
        }
        
    }


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
            return response()->json(['admin' => true, 'ID' => $user->ID, 'email' => $user->email, 'name' => $user->name, 'surname' => $user->surname, 'phone' => $user->phone]);
        }
        else{
            //return response()->json(['admin' => false, 'user' => $user]);
            return response()->json(['admin' => false, 'ID' => $user->ID, 'email' => $user->email, 'name' => $user->name, 'surname' => $user->surname, 'phone' => $user->phone]);
        }
    }

    

    
}
