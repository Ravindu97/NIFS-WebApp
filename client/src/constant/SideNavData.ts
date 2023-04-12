import { BiCategoryAlt, BiUserPin } from 'react-icons/bi';
import {
	HiOutlineUserGroup,
	HiOutlineOfficeBuilding,
	HiOutlineCurrencyDollar,
	HiOutlineLibrary,
	HiOutlineDatabase,
	HiOutlineClipboardList,
} from 'react-icons/hi';
import { RiUserStarLine } from 'react-icons/ri';
import { RouteName } from './routeNames';

// admin of admin division
export const AdministrationSidenav = [
	{
		title: 'Master',
		icon: HiOutlineDatabase,
		subpages: [
			{
				title: 'Employees',
				link: RouteName.Employee,
				icon: HiOutlineUserGroup,
			},
			{
				title: 'Employee Types',
				link: RouteName.EmployeeType,
				icon: BiUserPin,
			},
			{
				title: 'Employees Category',
				link: RouteName.EmployeeCategory,
				icon: BiCategoryAlt,
			},
			{
				title: 'Designations',
				link: RouteName.Designation,
				icon: RiUserStarLine,
			},
			{
				title: 'Divisions',
				link: RouteName.Divisions,
				icon: HiOutlineOfficeBuilding,
			},
		],
	},
	{
		title: 'Transactions',
		icon: HiOutlineClipboardList,
		subpages: [
			{
				title: 'Resignation Request',
				link: RouteName.AdminResignationReq,
				icon: HiOutlineOfficeBuilding,
			},
			{
				title: 'Contract Extension',
				link: RouteName.ContractExtension,
				icon: HiOutlineOfficeBuilding,
			},
		],
	},
];

//director dashboard
export const DirectorSideNavbar = [
	{
		title: 'Master',
		icon: HiOutlineDatabase,
		subpages: [
			{
				title: 'Projects',
				link: RouteName.Projects,
				icon: HiOutlineOfficeBuilding,
			},
		],
	},
	{
		title: 'Transactions',
		icon: HiOutlineClipboardList,
		subpages: [
			{
				title: 'Resignation Request',
				link: RouteName.DirectorResignationReq,
				icon: HiOutlineOfficeBuilding,
			},
			{
				title: 'Contract Extension Request',
				link: RouteName.ContractExtension,
				icon: HiOutlineOfficeBuilding,
			},
		],
	},
];

//sedu admin
export const SeduAdminSideNavbar = [
	{
		title: 'Master',
		icon: HiOutlineDatabase,
		subpages: [
			{
				title: 'Charges',
				link: RouteName.Charges,
				icon: HiOutlineCurrencyDollar,
			},
			{
				title: 'Facilities',
				link: RouteName.Facilities,
				icon: HiOutlineOfficeBuilding,
			},
			{
				title: 'All Venues',
				link: RouteName.VenueMaster,
				icon: HiOutlineLibrary,
			},
			{
				title: 'Projects',
				link: RouteName.Projects,
				icon: HiOutlineOfficeBuilding,
			},
		],
	},
	{
		title: 'Transactions',
		icon: HiOutlineClipboardList,
		subpages: [
			{
				title: 'Resignation Request',
				link: RouteName.AdminResignationReq,
				icon: HiOutlineOfficeBuilding,
			},
			{
				title: 'Contract Extension',
				link: RouteName.ContractExtension,
				icon: HiOutlineOfficeBuilding,
			},
		],
	},
];

//HOD dashboard
export const HODSideNavbar = [
	{
		title: 'Master',
		icon: HiOutlineDatabase,
		subpages: [
			{
				title: 'Projects',
				link: RouteName.Projects,
				icon: HiOutlineOfficeBuilding,
			},
		],
	},
	{
		title: 'Transactions',
		icon: HiOutlineClipboardList,
		subpages: [
			{
				title: 'Resignation Request',
				link: RouteName.AdminResignationReq,
				icon: HiOutlineOfficeBuilding,
			},
			{
				title: 'Contract Extension',
				link: RouteName.ContractExtension,
				icon: HiOutlineOfficeBuilding,
			},
		],
	},
];
