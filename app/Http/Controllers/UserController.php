<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

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
       return $user;
    }
}
