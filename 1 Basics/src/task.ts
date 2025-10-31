function delayedCall (cb: () => void): void {
	setTimeout(cb, 3000);
}

const cbFunction = (): void => {
        console.log("Function is delayed by 1 second !");
}

delayedCall(cbFunction);
