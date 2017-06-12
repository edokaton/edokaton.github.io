<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class MsdsPenggunaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::enableForeignKeyConstraints();
        Schema::create('msds_pengguna', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('id_msds');
            $table->integer('id_pengguna');
            $table->timestamps();

            // $table->foreign('id_msds')->references('id')->on('msds');
            // $table->foreign('id_pengguna')->references('id')->on('pengguna');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
