<?php namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Http\Response;

trait RESTActions {


    public function all()
    {
        $m = self::MODEL;
        return $this->respond(Response::HTTP_OK, $m::all());
    }

    public function get($id)
    {
        $m = self::MODEL;
        $model = $m::find($id);
        if(is_null($model)){
            return $this->respond(Response::HTTP_NOT_FOUND);
        }
        return $this->respond(Response::HTTP_OK, $model);
    }

    public function search(Request $request)
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

    public function add(Request $request){

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

    public function put(Request $request, $id)
    {
        $m = self::MODEL;
        $this->validate($request, $m::$rules);
        $model = $m::find($id);
        if(is_null($model)){
            return $this->respond(Response::HTTP_NOT_FOUND);
        }
        $model->update($request->all());
        return $this->respond(Response::HTTP_OK, $model);
    }

    public function remove($id)
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

    protected function respond($status, $data = [])
    {
        return response()->json($data, $status);
    }

}
