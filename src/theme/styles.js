
'use strict';
import React from 'react';
import Colors from './colors';
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
	headerAvatar: {
		marginRight: 20
	},
	container: {
		flex: 1,
		backgroundColor: 'black',
	},
	scrollView: {
		backgroundColor: Colors.appBackground,
		borderTopRightRadius: 35,
		borderTopLeftRadius: 35,
		flex: 1
	},
	mainContainer: {
		padding: 20,
	},
	homeHeading1: {
		fontWeight: 'bold',
		fontSize: 20
	},
	homeHeading2: {
		fontWeight: "100",
		fontSize: 20,
		color: '#35363B'
	},
	homeHeading3: {
		color: '#C0C0CA',
		paddingTop: 10,
		fontSize: 12,
	},
	cardCss: {
		flexDirection: 'row',
		backgroundColor: '#fff',
		borderRadius: 15,
		padding: 10,
		marginTop: 30
	},
	cardView1: {
		flex: 0.3, padding: 10
	},
	cardView2: {
		flex: 0.7, padding: 10
	},
	buttonView: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: 5
	},
	buttonCss: {
		backgroundColor: '#F6F6F6',
		borderRadius: 20,
		padding: 10
	},
	segmentCss: {
		backgroundColor: '#DFE1F0',
		padding: 0,
		borderRadius: 20,
		marginTop:10,
		marginBottom:10
	}
});

export default styles;