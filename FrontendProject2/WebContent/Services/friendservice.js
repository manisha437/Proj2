/**
 * FriendService
 */

app.factory('FriendService',function($http){
	var friendService={}

	friendService.getAllSuggestedUsers=function(){
		return $http.get("http://localhost:8089/MiddleWareProj2/suggestedusers")
	}
	
	friendService.sendFriendRequest=function(user){//value for toId property in Friend Entity
		return $http.post("http://localhost:8089/MiddleWareProj2/friendrequest",user)
	}
	
	friendService.getPendingRequests=function(){
		return $http.get("http://localhost:8089/MiddleWareProj2/pendingrequests")
	}
	
	friendService.acceptRequest=function(friendRequest){
		return $http.put("http://localhost:8089/MiddleWareProj2/acceptrequest",friendRequest)
	}
	friendService.deleteRequest=function(friendRequest){
		return $http.put("http://localhost:8089/MiddleWareProj2/deleterequest",friendRequest)
	}
	
	friendService.getAllFriends=function(){
		return $http.get("http://localhost:8089/MiddleWareProj2/friends")
	}
	
	return friendService;
})


