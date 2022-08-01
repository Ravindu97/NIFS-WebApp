import React from 'react';
import SecondaryNavbar from '../components/shared/SecondaryNavbar';
import Pages from '../components/sampleData/CommonNavData.json'
function AdminMainPage() {
	return <div className="body-content"><SecondaryNavbar pages={Pages} /></div>;
}

export default AdminMainPage;