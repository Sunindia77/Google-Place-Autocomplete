import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const SearchHistory = () => {
  const classes = useStyles();
  const searchHistory = useSelector((state) => state.searchHistory);

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Search History
      </Typography>
      <List>
        {searchHistory.map((search, index) => (
          <ListItem key={index} divider>
            <ListItemText
              primary={search.name}
              secondary={`Latitude: ${search.latitude}, Longitude: ${search.longitude}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SearchHistory;
