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
    case "billing-update":
      return `${baseUrl}/api/v1/billing-details/add/`;
    case "billing-details":
      return `${baseUrl}/api/v1/billing-details/`;
    case "add-credits":
      return `${baseUrl}/api/v1/credit/add-credit/`;
    case "credits":
      return `${baseUrl}/api/v1/credit/`;
    case "plan-list":
      return `${baseUrl}/api/v1/subscribe-plan/`;
    case "change-subscription":
      return `${baseUrl}/api/v1/change-subscription/`;
    case "influencer-details":
      return `${baseUrl}/api/v1/influencer-details`;
    case "event-details":
      return `${baseUrl}/api/v1/event/details`;
    case "book-event-credit":
      return `${baseUrl}/api/v1/book-event-credit/`;
    case "book-event":
      return `${baseUrl}/api/v1/book-event/`;
    default:
      return baseUrl;
  }
};
