package pageObject;
import org.openqa.selenium.JavascriptExecutor;
import java.util.*;
import org.openqa.selenium.WebDriver;
import static org.junit.Assert.assertEquals;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import helper.Helper;


public class LoginPage {
	
	public static WebDriver driver;

	String parentWindowHandler ;
	Helper wait = new Helper();
	

	public LoginPage(WebDriver driver) {
		this.driver = driver; 
        PageFactory.initElements(driver, this);
	}

	public void assertTitle() throws Throwable {
	    String title = driver.getTitle();
	    System.out.println(title);
		assertEquals("Hire skilled people & earn extra money today on Airtasker.com",title);
	}
	
	public void loginFormDisplay() throws Throwable {
		loginForm.isDisplayed();
		
	}
	
	public void enterUsername(String name) throws Throwable {
		wait.waitLoop(username);
	    username.sendKeys(name);
	    
	}
	
	public void enterPassword(String pass) throws Throwable {
	    password.sendKeys(pass);
	}

	public void clickLogin() throws Throwable {
	    loginButton.click();
	}
	
	
	public void checkErrorMsg(String expectMsg) throws Exception{
		
		wait.waitLoop(errorMessage);
		String errorMsg = errorMessage.getText();
		assertEquals(expectMsg, errorMsg);
	}
	
	public void checkPopupError(String expectMsg) throws Exception{
		Helper wait = new Helper();
		wait.waitLoop(errorPopup);
		String errorMsg = errorPopup.getText();
		assertEquals(expectMsg, errorMsg);
	}
	
	public void clickFBLogin() throws Exception {
		fbLogin.click();
	}
	
	public void swithToFBLogin() throws Exception {
		parentWindowHandler = driver.getWindowHandle(); 
		String subWindowHandler = null;

		Set<String> handles = driver.getWindowHandles(); 
		Iterator<String> iterator = handles.iterator();
		while (iterator.hasNext()){
		    subWindowHandler = iterator.next();
		}
		driver.switchTo().window(subWindowHandler); 

	}
	
	public void loginWithFB() throws Exception {
		fbUsername.sendKeys("cainaisi@gmail.com");
		fbPassword.sendKeys("test1234");
		fbPageLogin.click();	
	}
	
	public void switchBackToAT() throws Exception{
		driver.switchTo().window(parentWindowHandler);
	}
	
	
	@FindBy(className="login-form")
	WebElement loginForm;
	
	@FindBy(id="email-input")
	WebElement username;
	
	@FindBy(id="password-input")
	WebElement password;
	
	@FindBy(id="login-button")
	WebElement loginButton;
	
	@FindBy(className="error-tip")
	WebElement errorMessage;
	
	@FindBy(xpath="//*[@class='error-message']/div[1]")
	WebElement errorPopup;
	
	@FindBy(className="facebook-connect")
	WebElement fbLogin;
	
	@FindBy(id="email")
	WebElement fbUsername;
	
	@FindBy(id="pass")
	WebElement fbPassword;
	
	@FindBy(id="loginbutton")
	WebElement fbPageLogin;

}
