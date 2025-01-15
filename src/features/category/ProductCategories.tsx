import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import CustomHeader from '@components/ui/CustomHeader';
import { Colors } from '@utils/Constants';
import SideBar from './SideBar';
import { axiosApp } from '@service/apiInterceptor';
import { getAllCategories } from '@service/productService';

const ProductCategories = () => {
  const [categories, setCategories] = React.useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = React.useState<any>(null);
  const [products, setProducts] = React.useState<any[]>([]);
  const [categoriesLoading, setCategoriesLoading] = React.useState(true);
  const [productsLoading, setProductsLoading] = React.useState(false);

  const fetchCategories = async () => {
    try {
      setCategoriesLoading(true);
      const data = await getAllCategories();
      setCategories(data?.categories);
      if (data && data.length > 0) {
        setSelectedCategory(data[0]);
      }
    } catch (error) {
      console.log('Error fetching categories:', error);
    } finally {
      setCategoriesLoading(false);
    }
  };
  
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <CustomHeader title={selectedCategory?.name || 'Categories'} search />
      <View style={styles.subContainer}>
        {categoriesLoading ? (
          <ActivityIndicator size={'small'} color={Colors.border} />
        ) : (
          <SideBar
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryPress={(category: any) => setSelectedCategory(category)}
          />
        )}
      </View>
    </View>
  );
};

export default ProductCategories;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  subContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
