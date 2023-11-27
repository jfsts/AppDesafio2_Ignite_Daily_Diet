import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dashboard } from "../screens/Dashboard";
import { FeedbackNewSnack } from "../screens/FeedbackNewSnack";
import { Home } from "../screens/Home";

import { NewSnack } from "../screens/NewSnack";
import { ViewSnack } from "../screens/ViewSnack";
import { EditSnack } from "../screens/EditSnack";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="newsnack" component={NewSnack} />
      <Screen name="editsnack" component={EditSnack} />
      <Screen name="feedbacknewsnack" component={FeedbackNewSnack} />
      <Screen name="viewsnack" component={ViewSnack} />
      <Screen
        name="dashboard"
        component={Dashboard}
        initialParams={{ percent: 0.0 }}
      />
    </Navigator>
  );
}
