<?php namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

class EquipesController extends Controller {

    const MODEL = "App\Equipe";

    use RESTActions;

    public function searchEquipe(Request $request)
    {
        $m = self::MODEL;
        $name = $request->input('name');
        $description = $request->input('description');

        $model = $m::where("name", 'like', "%$name%")
            ->where("description", 'like', "%$description%") ->get();

        if(is_null($model)){
            return $this->respond(Response::HTTP_NOT_FOUND);
        }
        return $this->respond(Response::HTTP_OK, $model);
    }

    public function addEquipe(Request $request){

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

    public function removeEquipe($id)
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
