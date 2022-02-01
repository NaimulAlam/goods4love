<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\DonationController;
use App\Http\Controllers\AddDonationController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\AuctionController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(
    [
    'middleware' => 'api',
    'prefix' => 'auth',
    ],
    function ($router){
        Route::post('login', [UserController::class, 'login']);
        Route::post('register', [UserController::class, 'register']);
        Route::post('logout', [UserController::class, 'logout']);
        Route::get('userProfile', [UserController::class, 'userProfile']);
        Route::post('updateProfile', [UserController::class, 'updateProfile']);
        Route::post('refresh', [UserController::class, 'refresh']);
        Route::post('donation',[DonationController::class, 'donation']);
        Route::get('userDonationsList',[DonationController::class, 'userList']);
        Route::get('allDonationsList',[DonationController::class, 'list']);
        Route::post('addAdmin',[AdminController::class, 'addAdmin']);
        Route::post('isAdmin',[AdminController::class, 'isAdmin']);
        Route::post('addDonation',[AddDonationController::class, 'addDonation']);
    }

);


Route::post('newReview',[ReviewController::class, 'newReview']);
Route::post('newAuction',[AuctionController::class, 'newAuction']);
Route::post('auction',[AuctionController::class, 'updateAuction']);