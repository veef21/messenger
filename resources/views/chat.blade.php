@extends('layouts.app')

@section('content')
<!-- <messenger-component :user=""/> -->
	<router-view :user="{{ auth()->user() }}"/>
@endsection
