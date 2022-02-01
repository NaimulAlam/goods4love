<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Donation extends Model
{
    use HasFactory;
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'donation_request';
    protected $fillable = [
        'u_id',
        'email',
        'amount',
        'contactNumber',
        'ad_Id',
        
    ];

    public $timestamps = false;
}
