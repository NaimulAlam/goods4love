<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Donation;
use App\Models\AddDonation;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Validator;

class DonationController extends Controller
{
    public function __construct() {
        $this->middleware('auth:api');
    }

    public function donation(Request $req)
    {
       
        $validator = Validator::make($req->all(), [
            'email' => ['required', 'email', 'string', 'max:100'],
            'amount' => ['required', 'integer'],
            'contactNumber' => ['required'],
            'cause' => ['required', 'string', 'between:2,100' ]
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }

        $cause = $req->input('cause');
        $cause_id = AddDonation::where('title',$cause)->value('id');

        
            $donation = Donation::create(array_merge(
                $validator->validated(),
                ['u_id' => $req->u_id],
                ['ad_Id' => $cause_id]
                
            ));

            return response()->json([
                "status" => 'ok',
                "message" => 'Donation made'
            ]);
        
    }

    public function userList()
    {
        $user = auth()->user();
        $lastName = $user->lastName;
        $userDonationsData = Donation::all()->where('u_id', $user->id);

        $neededDataTitles = collect(['cause', 'lastName', 'amount']);
        $result = [];
        foreach($userDonationsData as $eachDonation)
        {
            $causeId = $eachDonation->ad_Id;
            $causeTitle = AddDonation::where('id',$causeId)->value('title');
            $neededData = $neededDataTitles->combine([$causeTitle,$lastName,$eachDonation->amount]);
            $result[] = $neededData;
        }
        
        return response()->json([
            "userDonations" => $result
        ]);
        
        
    }

    public function list()
    {
        $allDonations =  Donation::all();
        return response()->json([
            "alldonations" => $allDonations
        ]);
    }
    
}
