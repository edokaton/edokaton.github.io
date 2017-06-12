<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MsdsPengguna extends Model
{
	protected $table = 'msds_pengguna';

    public function foreignKeyMsds()
    {
        return $this->belongsTo('App\Msds', 'id_msds');
    }

    public function foreignKeyPengguna()
    {
        return $this->belongsTo('App\Pengguna', 'id_pengguna');
    }
}
