class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        int s=nums.size();
        vector<int>ans;
        for(int i=0;i<s;i++){
            for(int j=0;j<s;j++){
                if(i!=j&&nums[i]+nums[j]==target){
                    ans.push_back(i);
                    ans.push_back(j);
                    break;
                }
            }
            if(ans.size()!=0){
                break;
            }
        }
        return ans;
    }
};