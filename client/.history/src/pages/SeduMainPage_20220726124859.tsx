import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SecondaryNavbar from '../components/shared/SecondaryNavbar';


// sedu main page where all other section of sedu department can be access from here
function SeduMainPage() {
	return <div>
		<SecondaryNavbar />
		<div className="sub-body-content">
			<Routes>
				{/* <Route path="/" element={<NewRequest />} />
					<Route path="/recommend" element={<RecommendedRequest />} />
					<Route path="/approve" element={<ApproveRequest />} /> */}
			</Routes>
		</div>
	</div>;
}

export default SeduMainPage;
