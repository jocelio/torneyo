<?php namespace App\Http\Controllers;

use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;


class UsersController extends Controller {

    const MODEL = "App\User";

    use RESTActions;

    public function all()
    {
        $m = self::MODEL;
        return $this->respond(Response::HTTP_OK, $m::select('id','username','email')->get());
    }


    public function addUser(Request $request){

        $m = self::MODEL;
        $this->validate($request, $m::$rules);

        $imageName = $request->file('image')->getClientOriginalName();
        $imageName = uniqid($request->input('username').'-') . '-' . $imageName;
        $path = 'uploads' . DIRECTORY_SEPARATOR . 'user_files' . DIRECTORY_SEPARATOR . 'imgs' . DIRECTORY_SEPARATOR;
        $destinationPath = $path;// public_path($path); // upload path

        if(!file_exists($destinationPath))
            mkdir($destinationPath, 0777, true );

        $request->file('image')->move($destinationPath, $imageName);

        $fields = $request->all();
        $fields['image'] = $destinationPath.$imageName;
        $fields['password'] = $this->bcrypt($fields['password']);

        return $this->respond(Response::HTTP_CREATED, $m::create($fields));
    }

    private function bcrypt($str){
        $custo = '08';
        $salt = 'Cf1f11ePArKlBJomM0F6aJ';
        return crypt($str, '$2a$' . $custo . '$' . $salt . '$');
    }

    public function getUser()
    {
        return new JsonResponse([
            'message' => 'authenticated_user',
            'data' => JWTAuth::parseToken()->authenticate()
        ]);
    }


}
