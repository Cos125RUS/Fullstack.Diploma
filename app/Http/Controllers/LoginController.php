<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class LoginController extends Controller
{
    public function __invoke(Request $request): JsonResponse
    {
        $csrf = session()->token();
        Log::info('csrf - ' . $csrf);

        Log::info("Login with: " . $request->getContent());

        //Заглушка
        if ($request->email !== "test@test") {
            return response()->json(["status" => "fail", "code" => 0]);
        } else if ($request->password !== "123") {
            return response()->json(["status" => "fail", "code" => 1]);
        }

        return response()->json(["status" => "success"]);
    }
}
