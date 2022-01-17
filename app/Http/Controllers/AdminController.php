<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Admin;
use App\Models\User;

class AdminController extends Controller
{
    function makeAdmin(Request $req)
    {
        //check if email is user
        $admin = new Admin;
        $email=$req->input('email');
        $user_data = User::where('email', $email)->value('ID');
        if(Admin::where('u_id', $user_data)->first())
        {
            return "This user is already an admin";
        }
        $admin->u_id=$user_data;
        $admin->save();
        return $admin;
    
    }
}
