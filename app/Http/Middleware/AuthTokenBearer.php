<?php
/**
 * Created by PhpStorm.
 * User: jocelio.lima
 * Date: 6/30/2017
 * Time: 5:32 PM
 */

namespace App\Http\Middleware;
use Closure;
use Auth;
class AuthTokenBearer
{
    public function handle($request, Closure $next)
    {
        if(Auth::check()){
            return $next($request);
        }else{
            abort(401);
        }
    }
}