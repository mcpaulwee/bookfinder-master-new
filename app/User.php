<?php

namespace App;

use DB;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password','mobile','address','role_type','confirm_key',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function posts()
    {
        return $this->hasMany('App\PostedBook','user_id');
    }
    public function myMessages()
    {
       return $this->hasMany('App\Message','recipient_id');
    }
    public function messages($id)
    {
       return DB::table('messages as m')
       ->join('users as sender','sender.id','=','m.sender_id')
       ->join('users as recipient','recipient.id','=','m.recipient_id')
       ->join('posted_books as pk','pk.id','=','m.posted_id')
       ->join('posted_categories as pc','pc.posted_id','=','pk.id')
       ->select('sender.*','recipient.*','m.*','pk.*','pc.*')
       ->addSelect(DB::raw('IF(sender.id = m.sender_id, CONCAT(sender.firstname," ",sender.lastname), "")  AS sender'))
       ->addSelect(DB::raw('IF(recipient.id = m.recipient_id,CONCAT(recipient.firstname," ",recipient.lastname), "")  AS recipient'))
       ->where('sender.id',$id)
       ->orWhere('recipient.id',$id);
    }

    

}
