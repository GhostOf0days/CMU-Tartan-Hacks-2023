import React from 'react';

function MapPage() {
	return (
		<div>
			<iframe
				width="520"
				height="400"
				frameborder="0"
				scrolling="no"
				marginheight="0"
				marginwidth="0"
				id="gmap_canvas"
				src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Pittsburgh+(Carnegie%20Mellon%20University)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
			></iframe>
			<p>Look at upcoming Events!</p>
		</div>
	);
}

export default MapPage;
