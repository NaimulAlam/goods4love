<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AddDonation;

class AddDonationController extends Controller
{
    function addDonation(Request $req)
    {
        $addDonation = new AddDonation;
        $addDonation->title=$req->input('title');
        $addDonation->description=$req->input('description');
        $addDonation->file_path=$req->file('file')->store('donations');
        $addDonation->save();
        return $addDonation;
    }

    function list()
    {
        return AddDonation::all();
    }
}
