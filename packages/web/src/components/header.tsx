import { useNearUser, useNearWallet } from "react-near";
import { contractName } from "../env/contract";
import { Button } from "./button";
import { If } from "./if";

export function Header() {
  const user = useNearUser(contractName);
  return (
    <div className="w-screen h-[80px] flex items-center justify-center">
      <div className="flex px-5 items-center max-w-[1400px] w-[100%] justify-between">
        <svg
          height="20"
          className="w3-animate-top w3-animate-fade"
          viewBox="0 0 76 20"
          width="76"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <path d="m38.0449 4.17778v11.66662c0 .0889-.0666.1778-.1777.1778h-1.2223c-.5555 0-1.0888-.2889-1.4-.7555l-5.5111-8.51114.1778 4.24444v4.8667c0 .0889-.0667.1777-.1778.1777h-1.6c-.0889 0-.1777-.0666-.1777-.1777v-11.68892c0-.08889.0666-.17778.1777-.17778h1.2c.5556 0 1.0889.28889 1.4.75556l5.5111 8.48884-.1777-4.2444v-4.82222c0-.08889.0666-.17778.1777-.17778h1.6c.1334 0 .2.06667.2.17778z"></path>
          <path d="m54.444 16h-1.6889c-.1111 0-.2-.1111-.1555-.2222l4.4889-11.62224c.0444-.08889.1333-.15556.2222-.15556h2.1333c.1111 0 .2.06667.2223.15556l4.5111 11.62224c.0444.1111-.0445.2222-.1556.2222h-1.6889c-.0666 0-.1333-.0444-.1555-.1111l-3.6223-9.55557c-.0444-.13333-.2666-.13333-.3111 0l-3.6222 9.55557c-.0444.0667-.1111.1111-.1778.1111z"></path>
          <path d="m75.9557 15.7333-3.3778-4.3111c1.9111-.3555 3.0222-1.64442 3.0222-3.6222 0-2.26667-1.4667-3.8-4.0889-3.8h-4.7111c-.1333 0-.2444.11111-.2444.24444 0 .88889.7111 1.6 1.6 1.6h3.1777c1.5778 0 2.3334.8 2.3334 1.97778s-.7334 1.97778-2.3334 1.97778h-4.4889c-.1333 0-.2444.11111-.2444.2444v5.7778c0 .0889.0667.1778.1778.1778h1.6c.0889 0 .1778-.0667.1778-.1778v-4.2889h1.8444l2.9333 3.8223c.3111.4222.8.6444 1.3334.6444h1.2222c.0889 0 .1555-.1556.0667-.2667z"></path>
          <path d="m49.3776 4h-7.4444c-.1334 0-.2223.08889-.2223.22222 0 .88889.7334 1.62222 1.6223 1.62222h6.0444c.0889 0 .1778-.06666.1778-.17777v-1.51111c-.0222-.08889-.0889-.15556-.1778-.15556zm0 10.1556h-5.5555c-.0889 0-.1778-.0667-.1778-.1778v-3c0-.0889.0666-.1778.1778-.1778h5.1333c.0889 0 .1778-.0667.1778-.1778v-1.51109c0-.08889-.0667-.17778-.1778-.17778h-7c-.1333 0-.2445.11111-.2445.24445v6.55552c0 .1334.1112.2445.2445.2445h7.4222c.0889 0 .1778-.0667.1778-.1778v-1.5111c-.0222-.0667-.0889-.1333-.1778-.1333z"></path>
          <path d="m16.0444 1.02222-4.1777 6.2c-.2889.42222.2666.93334.6666.57778l4.1111-3.57778c.1112-.08889.2667-.02222.2667.13334v11.17774c0 .1556-.2.2223-.2889.1111l-12.44442-14.888844c-.4-.488889-.97778-.755556-1.62222-.755556h-.44445c-1.155554 0-2.11111.955556-2.11111 2.13333v15.73337c0 1.1777.955556 2.1333 2.13333 2.1333.73334 0 1.42223-.3778 1.82223-1.0222l4.17777-6.2c.28889-.4222-.26666-.9334-.66666-.5778l-4.11111 3.5556c-.11112.0888-.26667.0222-.26667-.1334v-11.15553c0-.15556.2-.22223.28889-.11111l12.44442 14.88884c.4.4889 1 .7556 1.6222.7556h.4445c1.1778 0 2.1333-.9556 2.1333-2.1333v-15.73337c-.0222-1.177774-.9778-2.13333-2.1555-2.13333-.7334 0-1.4223.377778-1.8223 1.02222z"></path>
        </svg>
        <If condition={!!user.isConnected}>
          <Button onClick={user.disconnect}>
            Disconnect Wallet
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.3983 8.38326L18.4018 7.27269C18.4057 6.02651 17.3987 5.02631 16.1526 5.03868L6.30696 5.1364C5.06084 5.14877 4.04746 6.16902 4.04352 7.4152L4.00716 18.9023C4.00322 20.1485 5.0102 21.1487 6.25632 21.1363L17.7429 21.0223C18.9891 21.0099 20.0024 19.9897 20.0064 18.7435L20.0323 10.5384C20.0356 9.5056 19.3445 8.64172 18.3983 8.38326ZM5.27423 7.40298C5.27602 6.83654 5.73665 6.37279 6.30306 6.36716L16.1487 6.26944C16.7152 6.26382 17.1729 6.71846 17.1711 7.2849L17.1678 8.31054L6.29657 8.41844C5.73015 8.42406 5.27243 7.96942 5.27423 7.40298ZM5.26786 9.41335C5.57507 9.5676 5.92337 9.65287 6.29268 9.6492L17.7793 9.53519C18.3457 9.52957 18.8034 9.9842 18.8016 10.5506L18.7964 12.1917L15.9248 12.2202C14.5654 12.2337 13.4599 13.3467 13.4556 14.7061C13.4513 16.0656 14.5498 17.1567 15.9092 17.1432L18.7809 17.1147L18.7757 18.7557C18.7739 19.3222 18.3132 19.7859 17.7468 19.7916L6.26021 19.9056C5.6938 19.9112 5.23608 19.4565 5.23787 18.8901L5.26786 9.41335ZM15.9209 13.4509L18.7925 13.4224L18.7848 15.884L15.9131 15.9125C15.2334 15.9192 14.6841 15.3736 14.6863 14.6939C14.6884 14.0142 15.2412 13.4577 15.9209 13.4509Z"
                fill="black"
              />
            </svg>
          </Button>
        </If>
      </div>
    </div>
  );
}
