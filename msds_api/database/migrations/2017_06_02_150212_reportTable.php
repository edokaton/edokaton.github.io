<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ReportTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::enableForeignKeyConstraints();
        Schema::create('report_pengguna', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('id_pengguna');
            $table->text('content');
            $table->timestamps();

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
