<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Donation;
use Illuminate\Support\Facades\Auth;

class DonationController extends Controller
{
    function donation(Request $req)
    {
        
        $donation = new Donation;

        $donation->u_id=$req->input('u_id');
        $donation->name=$req->input('name');
        $donation->email=$req->input('email');
        $donation->amount=$req->input('amount');
        $donation->save();
        return $donation;
       
       
    }

}
