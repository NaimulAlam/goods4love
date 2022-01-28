<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ReviewController extends Controller
{
    function newReview(Request $req)
    {
        $review = new Review;

        $review->name=$req->input('name');
        $review->companyName=$req->input('companyName');
        $review->description=$req->input('description');
        $review->save();
        return $review;
    }
}
