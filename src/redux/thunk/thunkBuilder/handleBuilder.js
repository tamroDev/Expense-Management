export const handleFetch = (builder, thunk, setDataCallback) => {
  builder
    .addCase(thunk.pending, (state) => {
      state.status = "loading";
    })
    .addCase(thunk.fulfilled, (state, action) => {
      state.status = "succeeded";
      setDataCallback(state, action);
    })
    .addCase(thunk.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload.message;
    });
};

export const handlePost = (builder, thunk) => {
  builder
    .addCase(thunk.pending, (state) => {
      state.status = "loading";
    })
    .addCase(thunk.fulfilled, (state) => {
      state.status = "succeeded";
    })
    .addCase(thunk.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload.message;
    });
};

export const handleDelete = (builder, thunk, setDataCallback) => {
  builder
    .addCase(thunk.pending, (state) => {
      state.status = "loading";
    })
    .addCase(thunk.fulfilled, (state, action) => {
      state.status = "succeeded";
      setDataCallback(state, action);
    })
    .addCase(thunk.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload.message;
    });
};
