import BottomSheet from '@gorhom/bottom-sheet';
import { ChatTeardropDots } from 'phosphor-react-native';
import React, { useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { theme } from '../../theme';
import { Options } from '../Options';

import { styles } from './styles';

function Widget() {
    const bottomSheetRef = useRef<BottomSheet>(null)

    function handleOpenBottomSheet(){
        bottomSheetRef.current?.expand()
    }

    return (
        <>
            <TouchableOpacity
                style={styles.button}
                onPress={handleOpenBottomSheet}
            >
                <ChatTeardropDots
                    size={24}
                    color={theme.colors.text_on_brand_color}
                />
            </TouchableOpacity>
            <BottomSheet
                ref={bottomSheetRef}
                snapPoints={[1, 280]}
                backgroundStyle={styles.modal}
                handleIndicatorStyle={styles.indicator}
            >
                <Options />
            </BottomSheet>
        </>
    );
}

export default gestureHandlerRootHOC(Widget)