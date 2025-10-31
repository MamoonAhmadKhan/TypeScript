type EventType = 'click' | 'scroll' | 'mousemove' | 'submit';

type ExcludeEvent = Exclude<EventType, 'click'>;

function handleEvent (event: ExcludeEvent): void {
	console.log(`${event} event has been trigerred !`);
}

handleEvent('scroll');
