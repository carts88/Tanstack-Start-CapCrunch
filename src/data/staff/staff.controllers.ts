import { queryStaffBios } from "./staff.queries";

export const getStaffBios = async () => {
  try {
    const staffRows = await queryStaffBios();

    return {
      success: true,
      data: staffRows,
    };
  } catch (error) {
    console.error("Error fetching staff bios or tenures:", error);
    return {
      success: false,
      error: "Failed to fetch staff bios or tenures",
    };
  }
};



// eaaftc - export async arrow function with try catch

// etaaftc - export typed async arrow function with try catch


/**
 * ERROR TYPES
 * !data return data does exist
 * !isAuthorized - user is not authorized to access this data
 * invalid endpoint
 * 
 */