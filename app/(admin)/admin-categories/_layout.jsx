import { Slot, Stack } from "expo-router"

const LayoutD = () => {
    return (
        <Stack
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false
            }}>
            <Stack.Screen
                name="categories"
                options={{
                    headerShown: false
                }} />
            <Stack.Screen
                name="create"
                options={{
                    headerShown: false
                }} />
        </Stack>
    )
}
export default LayoutD