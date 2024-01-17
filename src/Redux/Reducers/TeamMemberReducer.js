import { createSlice } from '@reduxjs/toolkit';

const teamMemberSlice = createSlice({
  name: 'teamMember',
  initialState: { teamMemberData: {} },
  reducers: {
    setTeamMemberData: (state, action) => {
      state.teamMemberData = action.payload;
    }
  }
});

export const { setTeamMemberData } = teamMemberSlice.actions;
export default teamMemberSlice.reducer;
