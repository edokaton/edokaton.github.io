<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Msds extends Model
{
    protected $table = 'msds';

    public function savedmsds()
    {
        return $this->hasMany('App\MsdsPengguna');
    }
}
