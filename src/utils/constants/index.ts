import { t } from 'i18next';
import { icons } from '../icons';

export const apiAdress = {
	/**
  *  baseUrl: "http://51.89.148.95:5000",
  clientApi: "http://51.89.148.95:5000/client-api/v1/",
  publicApi: "http://51.89.148.95:5000/public-api/v1/",
  */

	clientApi: 'https://api.trustit.dev/client-api/v1/',
	publicApi: 'https://api.trustit.dev/public-api/v1/',
	baseUrl: 'https://api.trustit.dev/',
};

export const categoriesIds = {
	smartphone: '5ec00b42b37fcc3fa8f25441',
	laptop: '5ec015dcb37fcc3fa8f25af7',
	tablet: '5ec016e8b37fcc3fa8f25ba3',
	printer: '5f65ce22fac7271a6471b966',
	tv: '5ec01800b37fcc3fa8f25c48',
	gaming: '5ec017a5b37fcc3fa8f25c10',
};
export const GOOGLE_CLIENT =
	'871589543552-j731j27tbrhjl2afvm5r5n7oc4vofrmi.apps.googleusercontent.com';
export const TN_COUNTRY_ID = '632ad7fe45bdfb0943ecc1c3';
export const KSA_COUNTRY_ID = '632aeb06ec4bd3103cf38623';

export const problemsIcons = [
	{ label: t('Screen Problem'), icon: icons.screenProblem },
	{ label: t('Batterie Problem'), icon: icons.batteryProblem },
	{ label: t('Engine Problem'), icon: icons.engineProblem },
	{ label: t('Speaker Problem'), icon: icons.speakerProblem },
	{ label: t('Touchscreen Problem'), icon: icons.touchscreenProblem },
	{
		label: t('RearFacing Camera Problem'),
		icon: icons.rearFacingCameraProblem,
	},
	{ label: t('Camera Problem'), icon: icons.cameraProblem },
	{ label: t('Screw Problem'), icon: icons.screwProblem },
	{ label: t('Other Problem'), icon: icons.otherProblem },
];
