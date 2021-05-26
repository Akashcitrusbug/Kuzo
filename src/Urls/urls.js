const baseUrl = "http://44.225.113.133:8000";

export const getUrl = (type) => {
  switch (type) {
    case "create_account":
      return `${baseUrl}/api/v1/create-account/`;
    case "login":
      return `${baseUrl}/api/v1/login/`;
    case "banner_list":
      return `${baseUrl}/api/v1/banner-list/`;
    case "forgot-password":
      return `${baseUrl}/api/v1/forget-password/`;
    case "reset-password":
      return `${baseUrl}/api/v1//set-new-password/`;
    case "profile-update":
      return `${baseUrl}/api/v1/profile-update/`;
    case "profile-details":
      return `${baseUrl}/api/v1/profile-details/`;
    case "popular-influencer-list":
      return `${baseUrl}/api/v1/popular-influencer-list/`;
    default:
      return baseUrl;
  }
};
