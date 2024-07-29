import * as React from "react";
import './Header.css';
import logo1 from './logo-BqpEPVar.png';

export default function Header() {
	return (
		<header className="header">
            <div className="header-buttons">
                <img src={logo1} alt="logo1" className="logoHeader"/>
                <button className="header-button">Posts</button>
                <button className="header-button">Sectors</button>
                <button className="header-button">Insights</button>
                <button className="header-button">Spotlight</button>
                <button className="header-button">Product</button>
                <button className="header-button">Events</button>
                <button className="header-button">Equipment</button>
                <button className="header-button">Sustainability</button>
                <button className="header-button">Digitalization</button>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAvCAYAAACYECivAAAABHNCSVQICAgIfAhkiAAABWlJREFUaEPNmQnIVFUUx5uyNCpbyDaxoF1KysIyzcwgWhUrjApb1CKxMon2hcLIyogW0TJKvxRSSCxRJIjKikzbjLLVCFtQWywiKSxz+v3Gd4f3zfdm5r2pmXkH/rw3c+895zdv3rv33PMK2zVoxWJxL4aejgajY9DBaB+0E9qCNqK16GP0NnqlUCh802C48rBCVgeADmfMGHRelbFb+X77Km2v8v2zgM/JGjf0Tw0M6NkMugMNigV7mfPX0HvoS7QBmM303ZHzXuhQ1B8NRY7vHo217/307cgKXheY4Lvg9DE0LnL+LccZqIOAP6QNiJ8e9L0MjY9+hEOXokn4WZPWT01ggpwoGDoSFdGdOJ+S1nm1fvi9krZ70X7od3QFfhem8VsVGKfn4EAnPkRvoAk4/SSN0zR9ood2On0vivrr/4l6YxOBcXYGA1+KBs/CUbgd6vnL3E6sexh0dzRwPLFm1nLSBRgHRzHgLbQ7mo6DazNTZBxAzJsYMjUaNoKYi6u5SAJ2zhyI5jHwkoyxG+4O9H0Mvh39jPoT+/skZ52AGeQDdRv6CB3PIBeAlhnxfWac3xcQe1RNYDq7Wn0YdRrGgGUtI40CwdCb009RT3QhDM9XMpSvMJ2fo/FiNIOO17QaNsSD43rOH0Wr4DguEZhOR9Pgmq/1qXb/tOpHwPMFsQ5Ho2BZEI9busJ0eIjDjWgmHVyJ2mrwTALgEbQUHteDsgVgl9s+aDAdlreVdtsF3IPDrxFHb5jWBaYCjU5hTmVraPBvyIXBtQiQEWgsXLPjwGHSzsXtEMAAvo7zx5FJlulsybzC8zi6no9pJN1r1t8B1wB8v4NWw9UvDryKD8eiE2h4t1kAWf0CvDNj/kBb4DK/Ll/hnzjbG+1Lw49ZHTezP9Ab5EIHwLY+3BIuvzugbnz5TzMBsvoG+DPGmIv3he3zAGxivpUvhM6VAWxO4/3bD77VAXgzJybpPfjS89wYwO79DkNHwOZ5aZZwUt4ftX1JrrxSsP3Cd3uiXgCbdpaAQ/47lC/dCuXCoi2UtY1NcO0WoAR+mg9ugSbSMC0XtEDANYyDdYyVcLkal0zgqzk+iebTYHqZC4PrLkAmo2lwTYwDO204fWykwfk4Fwbwm4CcjM6H64UysCc0htVuJI0mHW01eEzCzIn/Qj3js1dIL2+m4UG0iMaRbaXddgEf4HALmg3P2DhPAPZWsOxkEe8kOq1oF3SUC39H/F29JWCx5FC2+J7OuoCp5hI6WaFsiwH8MIFvQIvhMB/uZHFg671fISfqcXSe1WpiYE8h5utR3IEwrKwKbAMDruLwFDKtM93832pp9X48sa1umv+aO0wltvdwF0uq/FhsvhR9gE5loNXFphvA7o4vQMuJaVU/0ZKAQ7XSUusyNBwHm5pJDGwH/i9H5uZDiOeUlg7YXjg4kIPVy77I6vroWk4a/THEsVg+F1me8jY8q14+U6s+fBAOLBW5t/oNmWs0/G6i8kcB6wsdN5mutE6pFk1c3WpavQq8+6pnUMgxXCKn4Nir3pAB6oWw4GgOo5khOis5Q/nv3srBAorJexer+44jcjKBoyuhk7n2IpoTX+Pr0QNyGn1Go/KWnfPJ+AjFbGFd1bxAX6NzaTPH6WSpgCNo38F5ZSwjBfNhdN58H/lixb/2T+SD61ukQ5A78iHI9xnBvG+dukrbnmDRKjefz74BSIRODRxzKrhPtPVb7++05pPv1DW31gMMdDf6LKkGnRm44opYj/O9nZO9b0K9qr6L+xu5vVmLXHxWAFna9aaxWtD/CThN8Eb7AO0u3it9JirfHrkF9ocmQA/INXAFtNPhoNwDh1uKq81jUCj+C50C8ltsI7V6AAAAAElFTkSuQmCC" alt="Search" class="pl-12 h-10"></img>
            </div>
        </header>
	);
}

