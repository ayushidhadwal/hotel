import React, {FC} from 'react';

import {HStack, Box, VStack} from 'native-base';
import {Text, Image} from 'react-native';
import {Colors} from '../../../styles/Colors';
import FontStyle from '../../../styles/FontStyle';

type Props = {
  rate: string;
  food: string;
  description: string;
};

export const MenuDetailCard: FC<Props> = ({rate, food, description}) => {
  return (
    <Box>
      <HStack
        borderRadius={5}
        p={2}
        mt={5}
        shadow={2}
        backgroundColor={'white'}
        w={'95%'}
        alignSelf={'center'}>
        <Image
          style={{width: 80, height: 80, borderRadius: 4}}
          source={require('../../../assets/food.png')}
          alt={'no img'}
        />
        <VStack w={'75%'} ml={2}>
          <Text
            style={{
              ...FontStyle.CustomFont,
              fontSize: 18,
              fontWeight: 500,
              color: Colors.primary,
              marginTop: 4,
              textAlign: 'left',
            }}>
            {food}
          </Text>
          <Text
            style={{
              lineHeight: 14,
              ...FontStyle.CustomFont,
              fontSize: 12,
              fontWeight: 400,
              color: Colors.secondary,
              marginTop: 4,
              textAlign: 'left',
            }}>
            {description}
          </Text>
          <Text
            style={{
              ...FontStyle.CustomFont,
              fontSize: 12,
              fontWeight: 600,
              color: Colors.blue,
              alignSelf: 'flex-end',
            }}>
            {rate}
          </Text>
        </VStack>
      </HStack>
      <HStack
        borderRadius={5}
        p={2}
        mt={5}
        shadow={2}
        backgroundColor={'white'}
        w={'95%'}
        alignSelf={'center'}>
        <Image
          style={{width: 80, height: 80, borderRadius: 4}}
          source={require('../../../assets/food.png')}
          alt={'no img'}
        />
        <VStack w={'75%'} ml={2}>
          <Text
            style={{
              ...FontStyle.CustomFont,
              fontSize: 18,
              fontWeight: 500,
              color: Colors.primary,
              marginTop: 4,
              textAlign: 'left',
            }}>
            {food}
          </Text>
          <Text
            style={{
              lineHeight: 14,
              ...FontStyle.CustomFont,
              fontSize: 12,
              fontWeight: 400,
              color: Colors.secondary,
              marginTop: 4,
              textAlign: 'left',
            }}>
            {description}
          </Text>
          <Text
            style={{
              ...FontStyle.CustomFont,
              fontSize: 12,
              fontWeight: 600,
              color: Colors.blue,
              alignSelf: 'flex-end',
            }}>
            {rate}
          </Text>
        </VStack>
      </HStack>
      <HStack
        borderRadius={5}
        p={2}
        mt={5}
        shadow={2}
        backgroundColor={'white'}
        w={'95%'}
        alignSelf={'center'}>
        <Image
          style={{width: 80, height: 80, borderRadius: 4}}
          source={require('../../../assets/food.png')}
          alt={'no img'}
        />
        <VStack w={'75%'} ml={2}>
          <Text
            style={{
              ...FontStyle.CustomFont,
              fontSize: 18,
              fontWeight: 500,
              color: Colors.primary,
              marginTop: 4,
              textAlign: 'left',
            }}>
            {food}
          </Text>
          <Text
            style={{
              lineHeight: 14,
              ...FontStyle.CustomFont,
              fontSize: 12,
              fontWeight: 400,
              color: Colors.secondary,
              marginTop: 4,
              textAlign: 'left',
            }}>
            {description}
          </Text>
          <Text
            style={{
              ...FontStyle.CustomFont,
              fontSize: 12,
              fontWeight: 600,
              color: Colors.blue,
              alignSelf: 'flex-end',
            }}>
            {rate}
          </Text>
        </VStack>
      </HStack>
      <HStack
        borderRadius={5}
        p={2}
        mt={5}
        shadow={2}
        backgroundColor={'white'}
        w={'95%'}
        alignSelf={'center'}>
        <Image
          style={{width: 80, height: 80, borderRadius: 4}}
          source={require('../../../assets/food.png')}
          alt={'no img'}
        />
        <VStack w={'75%'} ml={2}>
          <Text
            style={{
              ...FontStyle.CustomFont,
              fontSize: 18,
              fontWeight: 500,
              color: Colors.primary,
              marginTop: 4,
              textAlign: 'left',
            }}>
            {food}
          </Text>
          <Text
            style={{
              lineHeight: 14,
              ...FontStyle.CustomFont,
              fontSize: 12,
              fontWeight: 400,
              color: Colors.secondary,
              marginTop: 4,
              textAlign: 'left',
            }}>
            {description}
          </Text>
          <Text
            style={{
              ...FontStyle.CustomFont,
              fontSize: 12,
              fontWeight: 600,
              color: Colors.blue,
              alignSelf: 'flex-end',
            }}>
            {rate}
          </Text>
        </VStack>
      </HStack>
      <HStack
        borderRadius={5}
        p={2}
        mt={5}
        shadow={2}
        backgroundColor={'white'}
        w={'95%'}
        alignSelf={'center'}>
        <Image
          style={{width: 80, height: 80, borderRadius: 4}}
          source={require('../../../assets/food.png')}
          alt={'no img'}
        />
        <VStack w={'75%'} ml={2}>
          <Text
            style={{
              ...FontStyle.CustomFont,
              fontSize: 18,
              fontWeight: 500,
              color: Colors.primary,
              marginTop: 4,
              textAlign: 'left',
            }}>
            {food}
          </Text>
          <Text
            style={{
              lineHeight: 14,
              ...FontStyle.CustomFont,
              fontSize: 12,
              fontWeight: 400,
              color: Colors.secondary,
              marginTop: 4,
              textAlign: 'left',
            }}>
            {description}
          </Text>
          <Text
            style={{
              ...FontStyle.CustomFont,
              fontSize: 12,
              fontWeight: 600,
              color: Colors.blue,
              alignSelf: 'flex-end',
            }}>
            {rate}
          </Text>
        </VStack>
      </HStack>
      <HStack
        borderRadius={5}
        p={2}
        mt={5}
        shadow={2}
        backgroundColor={'white'}
        w={'95%'}
        alignSelf={'center'}>
        <Image
          style={{width: 80, height: 80, borderRadius: 4}}
          source={require('../../../assets/food.png')}
          alt={'no img'}
        />
        <VStack w={'75%'} ml={2}>
          <Text
            style={{
              ...FontStyle.CustomFont,
              fontSize: 18,
              fontWeight: 500,
              color: Colors.primary,
              marginTop: 4,
              textAlign: 'left',
            }}>
            {food}
          </Text>
          <Text
            style={{
              lineHeight: 14,
              ...FontStyle.CustomFont,
              fontSize: 12,
              fontWeight: 400,
              color: Colors.secondary,
              marginTop: 4,
              textAlign: 'left',
            }}>
            {description}
          </Text>
          <Text
            style={{
              ...FontStyle.CustomFont,
              fontSize: 12,
              fontWeight: 600,
              color: Colors.blue,
              alignSelf: 'flex-end',
            }}>
            {rate}
          </Text>
        </VStack>
      </HStack>
      <HStack
        borderRadius={5}
        p={2}
        mt={5}
        shadow={2}
        backgroundColor={'white'}
        w={'95%'}
        alignSelf={'center'}>
        <Image
          style={{width: 80, height: 80, borderRadius: 4}}
          source={require('../../../assets/food.png')}
          alt={'no img'}
        />
        <VStack w={'75%'} ml={2}>
          <Text
            style={{
              ...FontStyle.CustomFont,
              fontSize: 18,
              fontWeight: 500,
              color: Colors.primary,
              marginTop: 4,
              textAlign: 'left',
            }}>
            {food}
          </Text>
          <Text
            style={{
              lineHeight: 14,
              ...FontStyle.CustomFont,
              fontSize: 12,
              fontWeight: 400,
              color: Colors.secondary,
              marginTop: 4,
              textAlign: 'left',
            }}>
            {description}
          </Text>
          <Text
            style={{
              ...FontStyle.CustomFont,
              fontSize: 12,
              fontWeight: 600,
              color: Colors.blue,
              alignSelf: 'flex-end',
            }}>
            {rate}
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};
