<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Admin;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Validator;

class AdminController extends Controller
{
    public function __construct() {
        $this->middleware('auth:api', ['except' => 'isAdmin']);
    }

    public function addAdmin(Request $req)
    {
        $validator = Validator::make($req->all(),[
            'adminEmail' => ['required', 'string', 'email'],
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        
        
            $email = $validator->validated();
            $userId = User::where('email', $email)->value('id');
            if(Admin::where('u_id', $userId)->first())
            {
                return response()->json([
                    "message" => 'User is already an admin'
                ]);
            }
            $admin = Admin::create(
                ['u_id' => $userId]
            );

            return response()->json([
                "status" => 'ok',
                "message" => 'User successfully updated'
            ]);
    
        
    
    }

    public function isAdmin(Request $req)
    {
        $loggingId = User::where('email',$req->email)->value('id');
        $isAdmin = Admin::where('u_id',$loggingId)->value('id');
        if($isAdmin)
        {
            return response()->json([
                "status" => 'ok',
                "message" => 'Admin found'
            ]);
        }else
        {
            return response()->json([
                "status" => 'error',
                "message" => 'Admin not found'
            ]);
        }
    }
}
