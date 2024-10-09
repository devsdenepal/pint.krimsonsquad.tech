import axios from 'axios';
import { API_KEYS } from './apiKeys';

export const searchIPInfo = async (ip) => {
  try {
    const response = await axios.get(`https://ipinfo.io/${ip}?token=${API_KEYS.IPINFO_API}`);
    return response.data;
  } catch (error) {
    return { error: "Error fetching data from ipinfo.io. Check for browser extensions blocking requests." };
  }
};

export const checkAbuseIPDB = async (ip) => {
  try {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const abuseIpUrl = `${proxyUrl}https://api.abuseipdb.com/api/v2/check?ipAddress=${ip}&maxAgeInDays=90`;

    const response = await axios.get(abuseIpUrl, {
      headers: {
        'Key': API_KEYS.ABUSEIPDB_API,
        'Accept': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    return { error: "Error checking IP with AbuseIPDB (CORS issues)." };
  }
};

export const searchEmailHunter = async (email) => {
  try {
    const response = await axios.get(`https://api.hunter.io/v2/email-verifier?email=${email}&api_key=${API_KEYS.HUNTER_API}`);
    return response.data;
  } catch (error) {
    return { error: "Error verifying email with Hunter.io." };
  }
};
