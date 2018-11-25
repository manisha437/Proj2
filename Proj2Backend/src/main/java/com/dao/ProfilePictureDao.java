package com.dao;

import com.models.ProfilePicture;

public interface ProfilePictureDao {
ProfilePicture  saveOrUpdateProfilePic(ProfilePicture profilePicture);
ProfilePicture  getImage(String email);
}
