<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class PostedBook extends Model
{
    use notifiable;

    protected $fillable = [
        'user_id', 'price', 'description','author','year','title','availability','image','IBSN',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    
    public function postedBy()
    {
        return $this->belongsTo('App\User','user_id');
    }
    public function postedCategory()
    {
        return $this->hasMany('App\PostedCategory','posted_id');
    }
    public function getCategory()
    {
        return $this->belongsToMany('App\Category','posted_categories','posted_id','category_id');
    }
    public function scopeSearch($query, $search, $id)
    {
        return $query->whereTitle($search)->orWhere('IBSN',$search)->where('user_id','!=',$id);
    }
    public function scopeDetails($query, $id)
    {
        return $query->whereId($id);
    }
   
}
