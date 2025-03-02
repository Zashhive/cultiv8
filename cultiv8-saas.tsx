// styles.scss

// Variables for consistent theming
$primary-purple: #6B46C1; // Purple-800 equivalent
$secondary-yellow: #F6E05E; // Yellow-500 equivalent
$green-accent: #C6F6D5; // Green-200 equivalent
$amber-text: #975A16; // Amber-800 equivalent
$gray-bg: #F7FAFC; // Gray-100 equivalent
$gray-text: #4A5568; // Gray-700 equivalent
$shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
$shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

// Global Styles
body {
  font-family: serif;
  background-color: $gray-bg;
  color: $gray-text;
  margin: 0;
  padding: 0;
}

// Header
header {
  background-color: $gray-bg;
  position: fixed;
  width: 100%;
  z-index: 50;
  box-shadow: $shadow-md;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    max-width: 1200px;
    margin: 0 auto;

    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      color: $primary-purple;
      text-decoration: none;
    }

    ul {
      list-style: none;
      padding: 0;

      &.mobile-menu {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: $gray-bg;
        box-shadow: $shadow-lg;
        padding: 1rem;

        &.open {
          display: flex;
        }
      }

      li {
        margin: 0.5rem 0;

        a {
          font-family: sans-serif;
          font-weight: 600;
          color: $primary-purple;
          text-decoration: none;
          transition: color 0.3s;

          &:hover {
            color: $secondary-yellow;
          }
        }
      }
    }

    .menu-toggle {
      font-size: 1.5rem;
      color: $primary-purple;
      cursor: pointer;
      display: block;
    }

    @media (min-width: 768px) {
      ul {
        display: flex;
        flex-direction: row;
        position: static;
        width: auto;
        box-shadow: none;
        padding: 0;

        li {
          margin: 0 0 0 2rem;
        }
      }

      .menu-toggle {
        display: none;
      }
    }
  }
}

// Hero Section
.hero {
  padding-top: 8rem;
  padding-bottom: 5rem;
  background-color: $gray-bg;
  text-align: center;

  .hero-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;

    h1 {
      font-size: 2.25rem;
      font-weight: bold;
      color: $primary-purple;
      margin-bottom: 1.5rem;

      @media (min-width: 768px) {
        font-size: 3rem;
      }
    }

    p {
      font-size: 1.25rem;
      color: $amber-text;
      margin-bottom: 2rem;
    }

    a {
      display: inline-block;
      padding: 0.75rem 1.5rem;
      background-color: $green-accent;
      color: $secondary-yellow;
      font-family: sans-serif;
      font-weight: bold;
      text-decoration: none;
      border-radius: 9999px;
      transition: all 0.3s;
      box-shadow: $shadow-md;

      &:hover {
        background-color: $primary-purple;
        color: $secondary-yellow;
        transform: translateY(-2px);
        box-shadow: $shadow-lg;
      }
    }
  }
}

// Trust Banner
.trust-banner {
  background-color: $green-accent;
  padding: 1.5rem 0;
  text-align: center;

  p {
    color: $gray-text;
    margin: 0.5rem 0;
  }
}

// Course Offerings
#courses {
  padding: 4rem 0;

  h2 {
    text-align: center;
    font-size: 1.875rem;
    font-weight: bold;
    color: $primary-purple;
    border-bottom: 2px solid $primary-purple;
    display: inline-block;
    padding-bottom: 0.5rem;
    margin-bottom: 3rem;
  }

  .course-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }

    .course-card {
      background-color: $gray-bg;
      border-radius: 0.5rem;
      overflow: hidden;
      box-shadow: $shadow-md;
      transition: all 0.3s;

      &:hover {
        transform: translateY(-0.5rem);
        box-shadow: $shadow-lg;
      }

      .icon {
        height: 12rem;
        background-color: $primary-purple;
        display: flex;
        align-items: center;
        justify-content: center;
        color: $gray-bg;
        font-size: 3rem;
      }

      .content {
        padding: 1.5rem;

        h3 {
          font-family: sans-serif;
          font-size: 1.25rem;
          font-weight: 600;
          color: $primary-purple;
          margin-bottom: 1rem;
        }

        p {
          margin: 0;
        }
      }
    }
  }
}

// Add more sections (Pricing, Testimonials, etc.) as needed...
