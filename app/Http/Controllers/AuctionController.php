<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuctionController extends Controller
{
    function newAuction(Request $req)
    {
        $newAuction = new Auction;

        $newAuction->file_path=$req->file('file')->store('auctions');
        $newAuction->title=$req->input('title');
        $newAuction->description=$req->input('description');
        $newAuction->minPrice=$req->input('minPrice');
        $donation->save();
        return $donation;
    }

    function editAuction(Request $req)
    {

    }

    function updatePrice(Request $req)
    {
        
    }
}
