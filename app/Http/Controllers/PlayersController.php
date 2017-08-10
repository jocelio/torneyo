<?php namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PlayersController extends Controller {

    const MODEL = "App\Player";

    use RESTActions;

    public function allPlayers()
    {
        $m = self::MODEL;
        return $this->respond(Response::HTTP_OK, $m::with('equipe')->get());
    }

    public function addPlayer(Request $request){

        $m = self::MODEL;
        $this->validate($request, $m::$rules);

        $imageName = $request->file('image')->getClientOriginalName();
        $imageName = uniqid($request->input('name').'-') . '-' . $imageName;
        $path = 'uploads' . DIRECTORY_SEPARATOR . 'user_files' . DIRECTORY_SEPARATOR . 'imgs' . DIRECTORY_SEPARATOR;
        $destinationPath = $path;// public_path($path); // upload path

        if(!file_exists($destinationPath))
            mkdir($destinationPath, 0777, true );

        $request->file('image')->move($destinationPath, $imageName);

        $fields = $request->all();
        $fields['image'] = $destinationPath.$imageName;

        return $this->respond(Response::HTTP_CREATED, $m::create($fields));
    }

    public function removePlayer($id)
    {
        $m = self::MODEL;
        $equipe = $m::find($id);
        if(is_null($equipe)){
            return $this->respond(Response::HTTP_NOT_FOUND);
        }
        $m::destroy($id);
        if (file_exists($equipe->image)) {
            unlink($equipe->image);
        }
        return $this->respond(Response::HTTP_NO_CONTENT);
    }
}
