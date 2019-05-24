import { StyleSheet, PixelRatio } from 'react-native'
import { getHeightPercent } from './ratio'

export default StyleSheet.create({
  container: {},
  modalContainer: {
    backgroundColor: 'white',
    flex: 1,

  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth:0.3,
    borderBottomColor:'#d7d7d7'
  },
  input: {
    height: 40,
    width: '70%',
    marginLeft: 35
  },
  inputOnly: {
    marginLeft: '15%'
  },
  touchFlag: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 19
  },
  imgStyle: {
    resizeMode: 'contain',
    width: 25,
    height: 19,
    borderWidth: 1 / PixelRatio.get(),
    borderColor: '#eee',
    opacity: 0.8
  },
  emojiFlag: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    width: 30,
    height: 30,
    borderWidth: 1 / PixelRatio.get(),
    borderColor: 'transparent',
    backgroundColor: 'transparent'
  },
  itemCountry: {
    flexDirection: 'row',
    height: getHeightPercent(5),
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 5
  },
  itemCountryFlag: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '7%',
    width: '15%'
  },
  itemCountryName: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    borderBottomWidth: 2 / PixelRatio.get(),
    borderBottomColor: '#ccc',
    height: 27

  },
  countryName: {
    fontSize: 14,//getHeightPercent(2),
    justifyContent:'center',
    marginTop : 7
  },
  countryCode: {
    textAlign: 'right'
  },
  scrollView: {
    flex: 1
  },
  letters: {
    marginRight: 10,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35
  },
  letter: {
    height: 23,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',

  },
  letterText: {
    textAlign: 'center',
    fontSize: 14 //getHeightPercent(2.2)
  },
  closeButton: {
    height: 20,
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:15
  },
  closeButtonImage: {
    height: 20,
    width: 20,
    resizeMode: 'contain'
  }
})
